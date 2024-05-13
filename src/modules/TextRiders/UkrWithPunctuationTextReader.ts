import { ITextReader } from "./ITextReader.js";

export class UkrWithPunctuationTextReader implements ITextReader {
    private _textFilePath: string = '../texts/UkrWithPunctuation.txt';

    async transformTextToArray(): Promise<string[]> {
        try {
            const response = await fetch(this._textFilePath);
            const fileContent: string = await response.text();
            const wordsArray: string[] = fileContent.split(' ');
            return wordsArray;
        } catch (error) {
            console.error('Error reading file:', error);
            return [];
        }
    }
}