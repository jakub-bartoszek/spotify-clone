import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/header";
import SearchContent from "@/components/search-content";
import SearchInput from "@/components/search-input";

interface SearchProps {
 searchParams: {
  title: string;
 };
}

const Search = async ({ searchParams }: SearchProps) => {
 const songs = await getSongsByTitle(searchParams.title);

 return (
  <div className="bg-neutral-900 rounded-lg h-full w-full overflow-y-auto">
   <Header className="from-bg-neutral-900">
    <div className="mb-2 flex flex-col gap-y-6">
     <h1 className="text-white text-3xl font-semibold">Search</h1>
     <SearchInput />
    </div>
   </Header>
   <SearchContent songs={songs} />
  </div>
 );
};

export default Search;
