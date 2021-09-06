export const variants = Object.freeze({
  reveal:() => {
    return {
      visible: { 
        opacity: 1,
        transition: {
          opacity: {
            duration:.5,
            type:"tween",
            ease:"easeInOut"
          },
        }
      },
      hidden: { opacity: 0 },
      exit:{ opacity: 0}
    }
  },
})