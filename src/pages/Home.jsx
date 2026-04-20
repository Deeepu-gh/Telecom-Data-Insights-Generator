import Counter from "../components/Counter";

function Home()
{
    
    return(
        <div>
            <header className="flex items-center justify-center h-20 bg-orange-500 text-white">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <div >
                   <Counter title="Counter 1" initialValue={0}/>
                </div>
                <div>
                  <Counter title="Counter 2" initialValue={0}/>
                </div>
                <div>
                  <Counter title="Counter 3" initialValue={0}/>
                </div>

            </main>
        </div>
    )
}
export default Home;