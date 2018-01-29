


export class IProduct {
    productId: number;

    productName: string;

    productCode: string;

    releaseDate: string;

    description: string;

    price: number;

    starRating: number;

    imageUrl:string;

    constructor(productId: number, productName: string, productCode: string, releaseDate: string,description: string, price: number, starRating: number, imageUrl:string) {
        this.productId=productId;
        this.productName=productName;
        this.productCode=productCode;
        this.releaseDate=releaseDate;
        this.description=description;
        this.price=price;
        this.starRating=starRating;
        this.imageUrl=imageUrl;            
    }

    public equalsExceptItsId(other: IProduct):boolean {
        if (this.description != other.description) return false;
        if (this.imageUrl != other.imageUrl) return false;
        if (this.price != other.price) return false;
        if (this.productCode != other.productCode) return false;        
        if (this.productName != other.productName) return false;
        if (this.releaseDate != other.releaseDate) return false;
        if (this.starRating != other.starRating) return false;        
        return true;
    }        
}
