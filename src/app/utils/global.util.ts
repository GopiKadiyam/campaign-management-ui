export function updatePathWithPlaceholders(
    path: string,
    ...values: (string | number)[]
  ): string {
    let updatedPath = path;
    let valueIndex = 0;
  
    // Regular expression to find placeholders like {variableName}
    const placeholderRegex = /\{[^}]+?\}/g;
  
    updatedPath = updatedPath.replace(placeholderRegex, (match) => {
      if (valueIndex < values?.length) {
        const value = values[valueIndex];
        valueIndex++;
        return value?.toString(); // Convert value to string
      } else {
        // Handle the case where there are more placeholders than provided values
        console.warn("Not enough values provided for all placeholders in path:", path);
        return match; // Return the original placeholder
      }
    });
  
    // Handle query parameters (if present)
    if (updatedPath.includes("?")) {
      const [basePath, queryString] = updatedPath?.split("?");
      const queryParams = new URLSearchParams(queryString);
  
      // Update query parameters with remaining values (if any)
      while (valueIndex < values?.length) {
        const value = values[valueIndex];
        valueIndex++;
  
        // You might need a more sophisticated way to determine the query parameter name
        // If you have a predefined order, use it.  Otherwise, append as numbered params.
        const paramName = `param${valueIndex - values?.length + 1}`; // Or a better name if known
        queryParams.append(paramName, value?.toString());
      }
  
      if (queryParams.toString()) {
        updatedPath = basePath + "?" + queryParams?.toString();
      } else {
        updatedPath = basePath; //Remove any ? with no parameters
      }
  
    }
  
    return updatedPath;
  }  