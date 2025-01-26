/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditorState{
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsaveChanges: boolean;

    constructor(content: string, cursorPosition: number, unsaveChanges: boolean){
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsaveChanges = unsaveChanges;
    }

    copyWith({content, cursorPosition, unsaveChanges}:Partial<CodeEditorState>):CodeEditorState{
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsaveChanges ?? this.unsaveChanges
        );
    }

    displayState(){
        console.log('Estado del editor');
        console.log(`Contenido: ${this.content}
            Cursor: ${this.cursorPosition}
            Unsaved: ${this.unsaveChanges}`);

    }
}

class CodeEditorHistory {
    private History: CodeEditorState[] = [];
    private CurrentIndex: number = -1;

    saveState(state: CodeEditorState){

        if(this.CurrentIndex < this.History.length - 1){
            this.History = this.History.slice(0, this.CurrentIndex + 1);
        }

        this.History.push(state);
        this.CurrentIndex++;
    }

    redo(): CodeEditorState | null{
        if(this.CurrentIndex < this.History.length - 1){
            this.CurrentIndex++;
            return this.History[this.CurrentIndex];
        }

        return null;
    }
}


