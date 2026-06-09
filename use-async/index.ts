export type AsyncResult<ResolveData, RejectionReason> =
  | [data: null, reason: RejectionReason]
  | [data: ResolveData, reason: null];

/**
 * Gracefully handles a callback that returns a promise.
 *
 * @example
 * await useAsync(() => Promise.resolve(123))
 * // [123, null]
 *
 * await useAsync(() => Promise.reject(new Error('Error message')))
 * // [null, new Error('Oops!')]
 */
export async function useAsync<ResolveData = unknown, RejectionReason = Error>(
  callback: () => Promise<ResolveData>,
): Promise<AsyncResult<ResolveData, RejectionReason>> {
  try {
    const data = await callback().catch((error) => {
      throw error;
    });
    return [data, null];
  } catch (error: unknown) {
    return [null, error as RejectionReason];
  }
}
