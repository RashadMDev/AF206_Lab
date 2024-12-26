import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggle = () => {
      const { theme, toggleTheme } = useContext(ThemeContext)
      return (
            <div className="App dark:bg-black dark:text-white">
                  <h1 className="">Hello World</h1>
                  <button
                        onClick={toggleTheme}
                  >Toggle to {" "}
                        {
                              theme === "light" ? "Dark" : "Light"
                        }
                        {""}
                  </button>
            </div>
      )
}

export default ThemeToggle