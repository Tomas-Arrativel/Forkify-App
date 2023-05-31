import View from './view';
import previewView from './previewView';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler)
  }

  _generateMarkup() {
    return this._data.map(bookmarks => previewView.render(bookmarks, false)).join('');
  }
}

export default new BookmarksView()