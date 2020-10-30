import Prismic from "prismic-javascript";

export const apiEndpoint = "https://ngo-next-theme.cdn.prismic.io/api/v2";
export const accessToken = "MC5YNXZZREJBQUFDSUFTNG1v.77-9VO-_ve-_vSNzfy1mau-_vS3vv73vv73vv71d77-9BXxXWSEs77-9Ce-_vSVi77-9JO-_ve-_vQ";

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export default Client;
