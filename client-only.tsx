"use client"
//usado para garantir que seu conteudo só seja renderizado após a montagem do componente no cliente, evitandoe incompatibilidade entre o html que é renderizado no servidor e o que é esperado no cliente
import { useEffect, useState } from 'react'

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
