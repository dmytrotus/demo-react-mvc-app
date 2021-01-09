import { data } from '../Database/products';
class ProductsModel
{	

	//функция для имитации await
	resolveAfter2Seconds() {
	  return new Promise(resolve => {
	    setTimeout(() => {
	      resolve(data);
	    }, 2000);
	  });
	}
	//функция для имитации await


	async getProducts() {

		const result = await this.resolveAfter2Seconds();

		return result;
	}

	async deleteProduct(id) {

		///тут я буду посылать запрос в БД и удалять продукт

	}


	
}

export const Products = new ProductsModel();