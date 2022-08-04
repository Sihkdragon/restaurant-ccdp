function LoginProcess(username: string, password: string): boolean {
  if (username === "Admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

export { LoginProcess };
