export default function Header() {
    return (

        <div className="py-6 px-10 flex flex-wrap items-center fixed top-0 w-full justify-between border bg-blue-300 "> 
            <div>
                <h1>Compra Smart</h1>
            </div>

            <nav>
                <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
                    <li><a href="#">Mi lista</a></li>
                    <li><a href="#">Importantes</a></li>
                </ul>
            </nav>

            <div>
                <label htmlFor="buscar"></label>
                <input type="text" name="buscar" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar por nombre" />
            </div>

        </div>
    



    )
  }
  