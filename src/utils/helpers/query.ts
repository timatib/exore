export default (() => {
  const getQueryString = (obj?: {
    [key: string]: string | number | null | undefined | boolean | string[];
  }) => {
    if (!obj) return "";

    let query = "?";

    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        query += `${key}=${obj[key]}&`;
      }
    });

    return query.slice(0, -1);
  };

  const getFromQueryString = (str: string): { [key: string]: string } => {
    if (!str && !str?.startsWith("?")) return {};

    return Object.fromEntries(
      str
        .slice(1)
        .split("&")
        .map((item) => item.split("=")) as [string, string][]
    );
  };

  return {
    getQueryString,
    getFromQueryString,
  };
})();
