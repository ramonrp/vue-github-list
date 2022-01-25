import { User, UserDetail } from "@/types/index";
export const githubService = {
  async getUsersByCompany(company: string, page: number): Promise<User[]> {
    return fetch(
      `https://api.github.com/orgs/${company}/public_members?page=${page}`
    ).then((data) => {
      return data.json();
    });
  },
  async getUserDetail(id: string): Promise<UserDetail> {
    return fetch(`https://api.github.com/users/${id}`).then((data) =>
      data.json()
    );
  },
};
