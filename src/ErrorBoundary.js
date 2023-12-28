// ErrorBoundary.js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Oops! Something went wrong.</p>
          <p>This is not a car.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
