// async function PokeAPI() {
//     const response = await fetch ('https://pokeapi.com/api/v2/pokemon')
//     return await response.json()

// }

// export {PokeAPI}
export const getPokemons = async (limit = 10, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('Erro: ' , error)
    }
}
export const getPokemonsData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('Erro: ' , error)
    }
    
}

    export const searchPokemon = async (pokemon) => {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('Erro: ' , error)
    }
}
    export const getPokemon = async (id) => {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('Erro: ' , error)
    }
}
