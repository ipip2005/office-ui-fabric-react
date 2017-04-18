import * as React from 'react';

export enum ReadingMode {
  /**
   * The content in this component will read out after other reading tasks of screen reader.
   * E.g. first read the information of currently focus control, then this content.
   * NOTE: ReadingMode.ReadAfterOtherContent doesn't support ChromeVOX v53.
   */
  ReadAfterOtherContent = 1,

  /**
   * Read immediately after this component is triggered rendering and updated.
   * Most screen readers will announce the word 'alert' before or after the whole sentence.
   */
  ReadImmediately = 2
}

export const ARIA__LIVE_MAPPING = {
  [ReadingMode.ReadAfterOtherContent]: 'polite',
  [ReadingMode.ReadImmediately]: 'assertive'
};

export interface IScreenReaderAlertProps extends React.Props<HTMLElement> {
  /**
   * The text for this component to read.
   */
  text: string;

  /**
   * Use readingMode to specify whether to read the alert, or read before/after normal screen reader content.
   *
   * @default ReadingMode.ReadAfterOtherContent
   */
  readingMode?: ReadingMode;

  /**
   * Use indicator to specifically tell screen reader this text should be read even when text is not changed.
   * Especially in case of re-reading the same text or the text that is possibly the same with the old one.
   *
   * Change the indicator to read the text no matter the text is changed or not.
   * Keep indicator the same value or simply not use it to read ONLY when the text is changed.
   */
  indicator?: number;
}

export const defaultScreenReaderAlertProps: IScreenReaderAlertProps = {
  text: '',
  readingMode: ReadingMode.ReadAfterOtherContent,
  indicator: undefined
};