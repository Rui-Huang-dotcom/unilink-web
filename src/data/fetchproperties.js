import Papa from "papaparse";
export const fetchData = async () => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/1ArfmvCnjPckMWwaZ7Mb0V0_ZIBON6q53UHI0hyUYlEM/gviz/tq?tqx=out:csv&sheet=Messages_"
  ); // Use your sheet URL
  const csvData = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      complete: (result) => {
        const properties = result.data.map((item) => ({
          id: item.id.toString(),
          address: item.address,
          location: item.location,
          postcode: item.postcode,
          price: item.price,
          images: item.images.split(","),
          video: item.video,
          floor: item.floor,
          epc: item.epc,
          map: item.map,
          bedrooms: item.bedrooms,
          bathrooms: item.bathrooms,
          livingrooms: item.livingrooms,
        }));
        resolve(properties);
      },
      header: true, // Ensure to use headers from the first row
    });
  });
};
