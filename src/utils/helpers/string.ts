export default (() => {
  const replaceByTypes = (
    string: string,
    param: { [key: string]: string | number | undefined },
    types: string[] = ["id"]
  ) => {
    let result = string;

    for (let index = 0; index < types.length; index++) {
      result = result.replace(
        `:${types[index]}`,
        String(param?.[types[index]])
      );
    }

    return result;
  };

  return {
    replaceByTypes,
  };
})();
