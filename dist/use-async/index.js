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
export async function useAsync(callback) {
    try {
        const data = await callback().catch((error) => {
            throw error;
        });
        return [data, null];
    }
    catch (error) {
        return [null, error];
    }
}
