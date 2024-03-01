// 使用的是solid-zustand,而不是zustand
import create from "solid-zustand"
import { persist } from "zustand/middleware"

//这里定义了session的类型
interface Session {
  token?: string
  id?: string
  setToken: (token: string) => void
  setId: (id: string) => void
}

//这里使用zustand的persist中间件来进行持久化
export const useSessionStore = create(
  persist<Session>(
    (set, get) => ({
      setToken: (token: string) => set({ token }),
      setId: (id: string) => set({ id })
    }),
    {
      name: "session-store",
      getStorage: () => localStorage
    }
  )
)
