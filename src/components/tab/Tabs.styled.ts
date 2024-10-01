import styled from '@emotion/styled';
import * as Tabs from '@radix-ui/react-tabs';

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid #6f6f7b; /* mauve-6 */
`;

export const TabsTrigger = styled(Tabs.Trigger)`
  font-family: inherit;
  background-color: white;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  color: #1e1e2e; /* mauve-11 */
  user-select: none;
  outline: none;

  &:first-of-type {
    border-top-left-radius: 6px;


  &:last-of-type {
    border-top-right-radius: 6px;
  }

  &:hover {
    color: #6e56cf; /* violet-11 */
  }

  &[data-state='active'] {
    color: #6e56cf; /* violet-11 */
    box-shadow:
      inset 0 -1px 0 0 currentColor,
      0 1px 0 0 currentColor;
  }
`;

export const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;
