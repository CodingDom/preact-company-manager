import { h } from 'preact';

export const loadPage = async (pageName: string): Promise<(() => h.JSX.Element) | null> => {
    try {
      const component = await import(`../components/pages/${pageName}`);
      return component.default;
    } catch (error) {
      console.error(`Error loading ${pageName}:`, error);
      return null;
    }
};
  