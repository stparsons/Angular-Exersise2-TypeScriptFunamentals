
export enum ButtonState {On, Off}
export class FaceBookButton{
    constructor(private _numberOfLikes:number, private _buttonState:ButtonState){}

    get numberOfLikes(){
        return this._numberOfLikes
    }

    get buttonState(){
        return this._buttonState;
    }

    click(){
        if(this._buttonState == ButtonState.On)
        {
            this._buttonState = ButtonState.Off
            this._numberOfLikes--;
        }
        else
        {
            this._buttonState = ButtonState.On
            this._numberOfLikes++;
        }
   }

    addlike(){
        this._buttonState = ButtonState.On;
        this._numberOfLikes++;
    }

    logOutput(testMessage:string){
        console.log('===================================');        
        console.log(testMessage);
        console.log('- - - - - - - - ');
        console.log('Number Of Likes : ' + this._numberOfLikes);
        if(this._buttonState == ButtonState.On)
            console.log('Button State : On');
        else
            console.log('Button State : Off'); 
        console.log('===================================');        
    }
}