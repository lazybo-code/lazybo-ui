import Vue from 'vue';
import {LaButton} from "./button";
import {LaReaderBook} from "./reader-book";

export interface InstallationOptions {}

export function install (vue: typeof Vue, options: InstallationOptions): void
export declare class Button extends LaButton {}
export declare class ReaderBook extends LaReaderBook {}
