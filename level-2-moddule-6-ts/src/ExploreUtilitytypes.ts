type Product ={
    id:number;
    name:string;
    Price:string;
    stock:number;
    color:string;
}

type priductSummary = Pick<Product, 'id'|'name'|'Price'>

type productwithoutStock = Omit<Product, 'stock'|'color'>

type productAll = Required<Product>

type produckpartial = Partial<Product>