class Usuario {
    constructor (nombre,apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        
        return `Nombre completo:  ${this.nombre} ${this.apellido}`
    }
    addMascotas = (masc) => {
        this.mascotas.push(masc)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook = (nombre, autor) => {
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        this.libros.forEach(element => {
            return `${element.nombre}`
        });

       /*
       const newArray = []
       for(let lib of this.libros){
        newArray.push(lib.nombre)
       }
       return newArray
       */ 

    }
}

    const usuario = new Usuario("Lucas","Cañete",
                            [{nombre : "El Padrino",
                              autor : "Mario Puzo"
                            },
                            {nombre : "El patron del mal",
                             autor : "Alonso Salazar"
                            },
                            {nombre : "El Principito",
                             autor : "Antoine de Saint-Exupery"
                            },
                            {nombre : "El Hobbit",
                             autor : "J.R.R Tolkien"
                            }],
                            ["Luli", "Mora"]
                            )

    console.log(usuario)
        usuario.getFullName()

    usuario.addMascotas("Luli")
        console.log(usuario)

    usuario.countMascotas()


    addBook = ({nombre, autor}) =>{
        this.libros.push({nombre, autor})
    }
    usuario.addBook({nombre , autor }) 
        console.log(usuario)

    usuario.getBookNames()