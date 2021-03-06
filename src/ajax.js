const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchInitalDeals() {
    try {
      const response = await fetch(apiHost + '/api/deals');
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealDetail(dealId) {
    try {
      const response = await fetch(apiHost + '/api/deals/' + dealId);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealsSearchresults(searchTerm) {
    try {
      const response = await fetch(
        apiHost + '/api/deals?searchTerm=' + searchTerm,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
};
