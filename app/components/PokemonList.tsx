import PokemonCard from "./PokemonCard";

export default async function PokemonList() {
    const res = await fetch('https://nestjs-pokedex-api.vercel.app/pokemons');
    const pokemons: [
        {
            id: number;
            name: string;
            pokedexId: number;
            image: string;
            types: {
                id: number;
                name: string;
                image: string;
            }[];
        }
    ] = await res.json();
    return (
        <main className="min-h-screen bg-white p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pokemons.map((pokemon) => (
                        <PokemonCard 
                            key={pokemon.id}
                            pokedexId={pokemon.pokedexId}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                        />
                    ))}
                </div>
            </div>
        </main>
  );
}
