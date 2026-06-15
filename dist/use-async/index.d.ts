export type AsyncResult<ResolveData, RejectionReason> = [data: null, reason: RejectionReason] | [data: ResolveData, reason: null];
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
export declare function useAsync<ResolveData = unknown, RejectionReason = Error>(callback: () => Promise<ResolveData>): Promise<AsyncResult<ResolveData, RejectionReason>>;
