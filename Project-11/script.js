const btn = document.getElementById("btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

const text = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non arcu ut purus aliquet euismod nec nec sapien. Cras lacinia eget nibh in sollicitudin. Curabitur congue elit suscipit mi ultrices, a consequat lacus imperdiet. Quisque sollicitudin hendrerit nisi, sagittis dignissim sapien euismod ac. Morbi in nulla efficitur quam efficitur varius et ac eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet nisi accumsan, lobortis nisi id, laoreet est. Praesent vitae ipsum vitae ipsum aliquet ullamcorper. Nulla massa odio, malesuada ut eros sit amet, sodales tristique augue. Fusce finibus magna est, sed condimentum nisi elementum vel. Maecenas sodales ut lorem nec vulputate. Quisque erat massa, auctor in justo et, scelerisque placerat tellus. Duis vel erat quis nulla sagittis molestie. Sed et lectus nec odio cursus rutrum.`,

  `Morbi eros mi, dapibus et risus vel, feugiat aliquam orci. Phasellus aliquet vitae nulla quis gravida. Praesent enim nulla, congue quis eros vitae, lacinia sollicitudin nisl. Phasellus volutpat, elit at ultrices condimentum, nisl magna blandit nunc, vitae tincidunt libero augue eget ipsum. Maecenas rutrum leo mi, nec suscipit ante varius sed. Maecenas egestas risus elit, et cursus velit tempus eget. Sed elementum convallis tincidunt. Etiam auctor feugiat molestie. Quisque in ante dolor. Sed id elementum ante, vitae aliquet nisl. Etiam maximus nisi vel mauris fermentum commodo. Nunc id magna erat. Mauris auctor, neque vel sodales volutpat, arcu diam elementum neque, non commodo nisl lacus sit amet quam. Maecenas a semper urna. In in sollicitudin erat. Maecenas nec diam non erat tempor sollicitudin.`,

  `Sed a quam iaculis, dictum enim id, fermentum ante. Fusce condimentum ante vel tellus ultrices consectetur. Nulla eu ligula quis nibh sagittis ornare. Mauris efficitur turpis in fringilla blandit. Phasellus tempor justo ut vulputate pulvinar. Nulla aliquet purus lorem, eget consectetur eros convallis sit amet. Nunc dignissim mollis imperdiet. Aliquam lobortis dignissim viverra. Morbi congue nunc nec ipsum tempus facilisis. Nullam luctus blandit risus eu varius.`,

  `Maecenas eget mattis velit, non pulvinar neque. Sed eget bibendum velit. Nullam iaculis porta tortor. Curabitur eu porttitor massa, eu iaculis ex. Donec est dui, auctor nec tincidunt eu, suscipit vel dui. Duis vitae interdum nibh. Curabitur ultrices auctor tincidunt. Fusce finibus vulputate tortor, id placerat elit pellentesque ac.`,

  `Donec id bibendum enim, vel iaculis diam. Integer nulla arcu, imperdiet vel consequat quis, sodales ac leo. Quisque congue erat non nunc sodales, in luctus leo accumsan. Suspendisse fermentum, eros nec imperdiet gravida, lacus eros lobortis nibh, nec mollis purus lorem sit amet ante. Maecenas non eros ornare, luctus eros sed, ultrices nibh. Nam eget maximus elit. Nunc leo magna, dapibus a feugiat eu, ultricies non orci. Donec lobortis eu arcu quis pulvinar. Donec turpis lacus, placerat nec lacus et, congue pellentesque nisl. Pellentesque id purus nisl. Quisque maximus dictum ex, a luctus neque sodales imperdiet.`,

  `Curabitur lacus purus, aliquet vel ultrices vitae, consequat vitae est. Fusce varius sollicitudin tempor. Vivamus suscipit elit et nulla ultrices, eget tempor neque consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu hendrerit diam. Curabitur ut aliquet nulla. Ut neque libero, pulvinar ac vehicula vitae, fermentum id lectus. Integer vulputate varius risus, vitae finibus libero aliquam et. Duis et convallis turpis. Duis diam urna, porttitor quis blandit quis, congue eget orci. Proin nec sapien non massa elementum cursus vel at ipsum. Praesent a rhoncus ex, nec interdum enim. Nulla semper gravida magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,

  `Duis a est ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent at maximus libero. Praesent eleifend tempus mi sit amet posuere. Suspendisse at euismod velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam non quam et lacus consequat posuere sed ac ante. Cras euismod erat vel dolor consequat efficitur vitae et risus. Etiam eget sapien arcu. Aliquam vulputate feugiat mauris non imperdiet. Phasellus mattis tempor facilisis.`,

  `Phasellus libero justo, laoreet sagittis mauris ut, imperdiet congue turpis. Vivamus porttitor magna tellus, ac egestas mauris ullamcorper sit amet. Donec pretium vitae nisl in convallis. Curabitur a est orci. Fusce at viverra mauris. Proin sollicitudin turpis lorem, id venenatis lectus bibendum et. Phasellus tortor mauris, pretium ac tellus dapibus, dapibus vulputate ante.`,
];

btn.addEventListener("click", () => {
  const value = parseInt(input.value);

  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    resultText = tempText
      .map((temp) => {
        return `<p class="result">${temp}</p>`;
      })
      .join("    ");
    result.innerHTML = tempText;
  }
});
