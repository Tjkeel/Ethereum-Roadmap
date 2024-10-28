/**
 * Collect the entries of two arrays into an array of pairs of entries.
 * 
 * @param firstCollection An array [a_1, ..., a_m]
 * @param lastCollection An array [b_1, ..., b_n]
 * @returns An array [[a_1, b_1], ..., [a_min(m, n), b_min(m, n)]].
 */
export function zip<S1, S2>(firstCollection: Array<S1>, lastCollection: Array<S2>): Array<[S1, S2]> {
  const length = Math.min(firstCollection.length, lastCollection.length);
  const zipped: Array<[S1, S2]> = [];

  for (let index = 0; index < length; index++) {
      zipped.push([firstCollection[index], lastCollection[index]]);
  }

  return zipped;
}