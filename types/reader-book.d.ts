import {LazyboUIComponent} from "./component";

export interface ISlotData {
  page: {
    total: number;
    current: number;
  };
  title: string;
}

export declare class LaReaderBook extends LazyboUIComponent {
  public pageTotal: number;
  public pageCurrent: number;

  private translateX: number;

  public previousPage(): void;
  public nextPage(): void;
  public calculateTotalPage(): void;

  private onToEnd(): void;
  private onCenter(): void;
  private calculateTranslateX(): void;
  private calculatePage(): boolean;

  get slotData(): ISlotData;
  get readerBook(): string[];
}
