import logo from './logo.svg';
import './App.css';
import Item from "./Item";

function App() {

    const topSizes = ["XS", "S", "M"]
    const bottomSizes = ["27\"", "30\"", "31\""]

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Happy birthday Mayank!
        </p>
      <p>
          Scroll down and pick out a gift :)
      </p>
      </header>
        <div className="Items-container">
            <Item name={"Textured Knit Crewneck Sweater (Heathered Natural Ivory)"}
                  sizes={topSizes}
                  lengths={[]}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM3DQBS_050847_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"Surge Jogger (Dark Olive)"}
                  sizes={topSizes}
                  lengths={bottomSizes}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM5956S_026083_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"Engineered Warmth Long Sleeve Crew (Vapor/Gull Grey/Black)"}
                  sizes={topSizes}
                  lengths={[]}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM3CDES_056949_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"Engineered Warmth Long Sleeve Crew (Natural Ivory/Natural Ivory)"}
                  sizes={topSizes}
                  lengths={[]}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM3CLLS_049872_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"Surge Jogger (Black)"}
                  sizes={topSizes}
                  lengths={bottomSizes}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM5956S_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"GridLiner Fleece Jogger (Heathered Black)"}
                  sizes={topSizes}
                  lengths={[]}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM5AF7S_1966_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"GridLiner Fleece Jogger (Heathered Dove Grey)"}
                  sizes={topSizes}
                  lengths={[]}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM5AF7S_033089_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>
            <Item name={"City Sweat Crew (White Opal)"}
                  sizes={topSizes}
                  lengths={[]}
                  imgLink={"https://images.lululemon.com/is/image/lululemon/LM3BUGS_047748_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}></Item>

        </div>
    </div>
  );
}

export default App;
