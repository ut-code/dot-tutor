import getConfig from "next/config";

/**
 * get the URL of a file, which is placed under the public directory
 * @param fileName the name of a file
 * @returns the URL of a file
 */
export function url(fileName: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { staticFolder: string };
  };
  return `${publicRuntimeConfig.staticFolder}${fileName}`;
}
