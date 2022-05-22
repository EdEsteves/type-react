type Componente = {
	new(...args: any[]): {        
		render(): any
	}
}

export default function logRender<C extends Componente>(Componente: C) {
	return class extends Componente {
		render() {
			console.log('Renderizando o componente....')
			const r: any = super.render()
			console.log('Renderização concluída!')
			
			return r
		}
	}
}