import Link from "next/link";
import Image from "next/image";

export default function PokemonCard({
    pokedexId,
    name,
    image,
    types
}:{
    pokedexId: number;
    name: string;
    image: string;
    types: {
        id: number;
        name: string;
        image: string;
    }[];
}) {
    return (
            <Link href={`/pokemons/${pokedexId}`} className="">
                   <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                        {pokedexId}
                    </p>

                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={200}
                        className="object-cover"
                    />

                    <div className="p-6">
                        <h3 className="text-xl font-medium text-slate-800">
                        {name}
                        </h3>

                        
                        <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                            {types.map((type) => type.name).join(", ")}
                        </p>
                        
                    </div>
                    </article>
            </Link>


    );

}