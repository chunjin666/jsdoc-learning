export const defaults = {
  transformRequest: [
    /** function transformRequest(data, header) {
    return data
  }*/
  ],
  transformResponse: [
    // function transformResponse(data) {
    //   if (typeof data === 'string') {
    //     try {
    //       data = JSON.parse(data);
    //     } catch (e) { /* Ignore */ }
    //   }
    //   return data
    // }
  ],

  header: {},
}
