import {Point} from './point'
import {FaceBookButton, ButtonState} from './faceBookButton'

let button = new FaceBookButton(0, ButtonState.Off);
button.logOutput('Testing Init');

button.click();
button.logOutput('After First Click. Should be [ON, 1]');

button.addlike()
button.logOutput('Add a Like. Should be [ON, 2]');

button.click();
button.logOutput('Click. Remove a like and now off [OFF, 1]');

button.addlike();
button.addlike();
button.addlike();
button.logOutput('Added 3 likes [ON, 4]');

console.log('Check Button State Property : ' + <ButtonState>button.buttonState);
console.log('Check # of Likes : ' + button.numberOfLikes);
console.log('END')






