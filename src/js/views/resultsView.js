import View from "./View";
import previewView from "./previewView";

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try another one';
  _message = '';

  _generateMarkup() {
    return this._data.map(bookmarks => previewView.render(bookmarks, false)).join('');
  }
}

export default new ResultsView()