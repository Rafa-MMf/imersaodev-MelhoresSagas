function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  
  var divResultado = document.getElementById('listaFilmes')
  divResultado.innerHTML = ""
  
  if (filmeFavorito == "6") {
    var filmesSenhor = ["https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var filmesSenhor1 =["https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var filmesSenhor2 = ["https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var filmesSenhor3 = ["https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var filmesSenhor4 = ["https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var filmesSenhor5 = ["https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    
    listarFilmesNaTela(filmesSenhor)
    listarFilmesNaTela(filmesSenhor1)
    listarFilmesNaTela(filmesSenhor2)
    listarFilmesNaTela(filmesSenhor3)
    listarFilmesNaTela(filmesSenhor4)
    listarFilmesNaTela(filmesSenhor5)
    
  } else if (filmeFavorito == "2") {
    var maze1 = ["https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var maze2 = ["https://m.media-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var maze3 = ["https://m.media-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    listarFilmesNaTela(maze1)
    listarFilmesNaTela(maze2)
    listarFilmesNaTela(maze3)
         
  } else if (filmeFavorito == "3") { 
    var harry1 = ["https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry2 = ["https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry3 = ["https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry4 = ["https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry5 = ["https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry6 = ["https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry7 = ["https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var harry8 = ["https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    
    listarFilmesNaTela(harry1)
    listarFilmesNaTela(harry2)
    listarFilmesNaTela(harry3)
    listarFilmesNaTela(harry4)
    listarFilmesNaTela(harry5)
    listarFilmesNaTela(harry6)
    listarFilmesNaTela(harry7)
    listarFilmesNaTela(harry8)
    
  } else if (filmeFavorito == "4") {
    var jogo1 = ["https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var jogo2 = ["https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var jogo3 = ["https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var jogo4 = ["https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    listarFilmesNaTela(jogo1)
    listarFilmesNaTela(jogo2)
    listarFilmesNaTela(jogo3)
    listarFilmesNaTela(jogo4)
    
    } else if (filmeFavorito == "5") {
    var marvel1 = ["https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel2 = ["https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel3 = ["https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel4 = ["https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel5 = ["https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel6 = ["https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel7 = ["https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg"]
    var marvel8 = ["https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg"]
    var marvel9 = ["https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY268_CR1,0,182,268_AL_.jpg"]
    var marvel10 = ["https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel11 = ["https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel12 = ["https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel13 = ["https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel14 = ["https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel15 = ["https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel16 = ["https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel17 = ["https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel18 = ["https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel19 = ["https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel20 = ["https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel21 = ["https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel22 = ["https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel23 = ["https://m.media-amazon.com/images/M/MV5BY2YxMzgzOGUtMzA3ZC00ODkzLTg4YjktZmMxODZiZDBkYjUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var marvel24 = ["https://m.media-amazon.com/images/M/MV5BY2Y1ODBhYTItYmJiZi00NjU2LWI2NjktNTcwM2U2NGQ2ZTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

    listarFilmesNaTela(marvel1)
    listarFilmesNaTela(marvel2)
    listarFilmesNaTela(marvel3)  
    listarFilmesNaTela(marvel4)
    listarFilmesNaTela(marvel5)  
    listarFilmesNaTela(marvel6)  
    listarFilmesNaTela(marvel7)  
    listarFilmesNaTela(marvel8)  
    listarFilmesNaTela(marvel9)  
    listarFilmesNaTela(marvel10)  
    listarFilmesNaTela(marvel11)
    listarFilmesNaTela(marvel22)
    listarFilmesNaTela(marvel12)  
    listarFilmesNaTela(marvel13)  
    listarFilmesNaTela(marvel14)  
    listarFilmesNaTela(marvel15)  
    listarFilmesNaTela(marvel16)  
    listarFilmesNaTela(marvel17)  
    listarFilmesNaTela(marvel18)  
    listarFilmesNaTela(marvel19)  
    listarFilmesNaTela(marvel20)  
    listarFilmesNaTela(marvel21)
    listarFilmesNaTela(marvel23)
    listarFilmesNaTela(marvel24)
     
      
      } else if (filmeFavorito == "1") {
    var x1 = ["https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x2 = ["https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x3 = ["https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY268_CR1,0,182,268_AL_.jpg"]
    var x4 = ["https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x5 = ["https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x6 = ["https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x7 = ["https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x8 = ["https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg"]
    var x9 = ["https://m.media-amazon.com/images/M/MV5BZDQ2NTdmNDgtMGIwMS00ODE2LTk5M2EtZGZhYzc4MWRlNTU3XkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
        
    listarFilmesNaTela(x1)
    listarFilmesNaTela(x2)    
    listarFilmesNaTela(x3)
    listarFilmesNaTela(x4)    
    listarFilmesNaTela(x5)    
    listarFilmesNaTela(x6)    
    listarFilmesNaTela(x7)    
    listarFilmesNaTela(x8) 
    listarFilmesNaTela(x9)
        
  } else {
    alert("Imagem inválida!!") 
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
