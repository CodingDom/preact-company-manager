import { h, FunctionalComponent } from "preact";

export const loadPage = async (
  pageName: string
): Promise<FunctionalComponent | null> => {
  try {
    const component = await import(`../components/pages/${pageName}`);
    return component.default;
  } catch (error) {
    console.error(`Error loading ${pageName}:`, error);
    return null;
  }
};
