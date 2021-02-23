import React from "react"

const defaultState = {
    spin: false,
    loading: () => {},
    close: () => {}
}

const Context = React.createContext(defaultState)

class Provider extends React.Component {
    state = {
        spin: false,
    }

    loading = () => {
        let spin = true
        this.setState({ spin })
    }

    close = () => {
        let spin = false
        this.setState({ spin })
    }

    render() {
        const { children } = this.props
        const { spin } = this.state
        return (
        <Context.Provider
            value={{
            spin,
            loading: this.loading,
            close: this.close
            }}
        >
        {children}
        </Context.Provider>
        )
    }
}

export default Context

export { Provider }