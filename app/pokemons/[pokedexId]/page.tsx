import Image from "next/image";

export default async function DetailsPokemon({ params }: { params: { pokedexId: string } }) {
    const res = await fetch(`https://nestjs-pokedex-api.vercel.app/pokemons/${params.pokedexId}`);
    const pokemon: {
        id: number;
        name: string;
        pokedexId: number;
        image: string;
        types: {
            id: number;
            name: string;
            image: string;
        }[];
    } = await res.json();
    return (
        <main className="min-h-screen bg-white ">
          <div className="relative h-[45vh] w-full bg-slate-50">
        {pokemon.image && (
            <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
                className="object-cover"
            />
        )}
          </div>
      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10">
        <div className="bg-white p-8 md:p-8 rounded-3xl shadow-xl border border-slate-50">

          <h1 className="text-3xl font-light text-slate-900 mb-6 text-center">
            <span className="italic font-serif">{pokemon.name}</span>
          </h1>
          
          <p className="text-slate-500 text-sm mt-2 line-clamp-2">
          </p>
          </div>
        
          
        </div>
        
    </main>
    );
}   
