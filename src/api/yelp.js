import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xNQytcKuzRUNFGSUWOZUuWpv9PAj20bdH6Pm1DgXRjVqsb7WFN1fCmUycX9IE0Epu1tsw_uPuOUfot-BpCo-LGU9ybIioiJrUuX3L88CK1IOW6DrDiYinMgCkYnxYXYx",
  },
});
