import  {useState,useEffect, useMemo} from 'react'

const useColor = () => {

    const [currentBackground, setCurrentBackground] = useState("");
    const backgroundColors = useMemo(() => {
      return {
        mandarin: { value: "rgba(225, 51, 0, 1)", index: 1 },
        blue: { value: "rgba(30, 50, 100, 1)", index: 2 },
        pink: { value: "rgba(232, 17, 91, 1)", index: 3 },
        green: { value: "rgba(20, 138, 8, 1)", index: 4 },
        orange: { value: "rgba(188, 89, 0, 1)", index: 5 },
        pink2: { value: "rgba(225, 17, 140, 1)", index: 6 },
        purple: { value: "rgba(176, 40, 151, 1)", index: 7 },
        blue2: { value: "rgba(141, 103, 171, 1)", index: 8 },
        blue3: { value: "rgba(115, 88, 255, 1)", index: 9 },
        green2: { value: "rgba(5, 105, 82, 1)", index: 10 },
        brown: { value: "rgba(125, 75, 50, 1)", index: 11 },
        // mandarin: { value: "#E13300", index: 1 },
        // blue: { value: "#1E3264", index: 2 },
        // pink: { value: "#E8115B", index: 3 },
        // green: { value: "#148A08", index: 4 },
        // orange: { value: "#BC5900", index: 5 },
        // pink2: { value: "#E1118C", index: 6 },
        // purple: { value: "#B02897", index: 7 },
        // blue2: { value: "#8D67AB", index: 8 },
        // blue3: { value: "#7358FF", index: 9 },
        // green2: { value: "#056952", index: 10 },
        // brown: { value: "#7D4B32", index: 11 },
      };
    }, []);
  
    useEffect(() => {
      let randomNumber = Math.ceil(Math.random() * 10 + 1);
      for (let key in backgroundColors) {
        if (backgroundColors[key].index === randomNumber)
          setCurrentBackground(backgroundColors[key].value);
      }
    }, [backgroundColors]);

  return {
    currentBackground,
    setCurrentBackground
  }
}

export default useColor