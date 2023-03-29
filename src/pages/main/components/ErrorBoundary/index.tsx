// ErrorBoundary 最佳实践
// https://juejin.cn/post/7207058392287576123#comment

import React, { Component, ReactNode } from 'react';

interface Props {
  [props: string]: any;
  fallback?: ReactNode;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    console.log(
      'xl ~ file: index.tsx:25 ~ ErrorBoundary ~ getDerivedStateFromError ~ error:',
      error,
    );
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('xl ~ file: index.tsx:35 ~ ErrorBoundary ~ componentDidCatch ~ error:', error);
    console.log(
      'xl ~ file: index.tsx:35 ~ ErrorBoundary ~ componentDidCatch ~ errorInfo:',
      errorInfo,
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
