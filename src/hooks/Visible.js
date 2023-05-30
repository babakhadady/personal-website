import { useEffect, useState } from "react";

export default function Visible(size) {
      const [visible, setVisible] = useState(true)
  
      const controlNav = () => {
        setVisible(window.scrollY < size)
      }
      useEffect(() => {
        window.addEventListener('scroll', controlNav)
        return () => {
          window.removeEventListener('scroll', controlNav)
        }
      }, )
  
      return visible
}
