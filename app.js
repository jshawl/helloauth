for ( var i = 0, len = data.length; i < len; i++ ){
  repo = data[i];
  li = document.createElement('li');
  title = document.createElement('h3');
  anchor = document.createElement('a');
  anchor.href = "https://github.com/"+ repo.repo;
  anchor.innerText = repo.repo

  title.appendChild( anchor );
  li.appendChild( title );
  document.querySelector('.js-repos').appendChild( li );
}
