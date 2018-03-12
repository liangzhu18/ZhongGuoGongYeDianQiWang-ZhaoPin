package zhaopin.service;

import org.springframework.stereotype.Component;

import zhaopin.hibernate.ActivitiesEntranceRepository;
import zhaopin.hibernate.CategoryRepository;
import zhaopin.hibernate.NavRepository;
import zhaopin.hibernate.OrganizationServiceRepository;
import zhaopin.hibernate.RecommendKeywordsRepository;
import zhaopin.hibernate.entity.ActivitiesEntrance;
import zhaopin.hibernate.entity.Nav;
import zhaopin.hibernate.entity.RecommendKeywords;
import zhaopin.hibernate.entity.Category;
import zhaopin.hibernate.entity.OrganizationService;

@Component
public class AddDataService {
	
	public void run(NavRepository navRepository, 
			ActivitiesEntranceRepository activitiesEntranceRepository,
			RecommendKeywordsRepository recommendKeywordsRepository,
			CategoryRepository categoryRepository,
			OrganizationServiceRepository organizationServiceRepository )
	{
		Category c1 = new Category();
		c1.setName("互联网/电子商务");
		c1.setValue("#");
		Category c2 = new Category();
		c2.setName("金融/投资/证券");
		c2.setValue("#");
		Category c3 = new Category();
		c3.setName("汽车及零配件");
		c3.setValue("#");
		Category c4 = new Category();
		c4.setName("房地产");
		c4.setValue("#");
		Category c5 = new Category();
		c5.setName("测试工程师");
		c5.setValue("#");
		Category c6 = new Category();
		c6.setName("理财顾问");
		c6.setValue("#");
		Category c7 = new Category();
		c7.setName("结构/设计");
		c7.setValue("#");
		Category c8 = new Category();
		c8.setName("成本管理");
		c8.setValue("#");
		Category c9 = new Category();
		c9.setName("Java开发");
		c9.setValue("#");
		Category c10 = new Category();
		c10.setName("风险控制");
		c10.setValue("#");
		Category c11 = new Category();
		c11.setName("销售经理");
		c11.setValue("#");
		Category c12 = new Category();
		c12.setName("销售/市场");
		c12.setValue("#");
		Category c13 = new Category();
		c13.setName("网络推广");
		c13.setValue("#");
		Category c14 = new Category();
		c14.setName("经济研究员");
		c14.setValue("#");
		Category c15 = new Category();
		c15.setName("售后服务");
		c15.setValue("#");
		Category c16 = new Category();
		c16.setName("财务经理");
		c16.setValue("#");
		
		categoryRepository.save(c1);
		categoryRepository.save(c2);
		categoryRepository.save(c3);
		categoryRepository.save(c4);
		categoryRepository.save(c5);
		categoryRepository.save(c6);
		categoryRepository.save(c7);
		categoryRepository.save(c8);
		categoryRepository.save(c9);
		categoryRepository.save(c10);
		categoryRepository.save(c11);
		categoryRepository.save(c12);
		categoryRepository.save(c13);
		categoryRepository.save(c14);
		categoryRepository.save(c15);
		categoryRepository.save(c16);
		
		OrganizationService o1 = new OrganizationService();
		o1.setName("企业入口");
		o1.setValue("#");
		OrganizationService o2 = new OrganizationService();
		o2.setName("企业服务");
		o2.setValue("#");
		OrganizationService o3 = new OrganizationService();
		o3.setName("人事外包");
		o3.setValue("#");
		OrganizationService o4 = new OrganizationService();
		o4.setName("调研中心");
		o4.setValue("#");
		OrganizationService o5 = new OrganizationService();
		o5.setName("企业培训");
		o5.setValue("#");
		OrganizationService o6 = new OrganizationService();
		o6.setName("典范雇主");
		o6.setValue("#");
		OrganizationService o7 = new OrganizationService();
		o7.setName("在线测评");
		o7.setValue("#");
		OrganizationService o8 = new OrganizationService();
		o8.setName("薪酬调查");
		o8.setValue("#");
		
		organizationServiceRepository.save(o1);
		organizationServiceRepository.save(o2);
		organizationServiceRepository.save(o3);
		organizationServiceRepository.save(o4);
		organizationServiceRepository.save(o5);
		organizationServiceRepository.save(o6);
		organizationServiceRepository.save(o7);
		organizationServiceRepository.save(o8);
		
		
	
		
		
		Nav n1 = new Nav();
		n1.setName("首页");
		n1.setValue("#");
		Nav n2 = new Nav();
		n2.setName("职位搜索");
		n2.setValue("#");
		Nav n3 = new Nav();
		n3.setName("地区频道");
		n3.setValue("#");
		Nav n4 = new Nav();
		n4.setName("职场资讯");
		n4.setValue("#");
		Nav n5 =new Nav();
		n5.setName("校园招聘");
		n5.setValue("#");
		Nav n6 =new Nav();
		n6.setName("无忧精英");
		n6.setValue("#");
		
		navRepository.save(n1);
		navRepository.save(n2);
		navRepository.save(n3);
		navRepository.save(n4);
		navRepository.save(n5);
		navRepository.save(n6);
		
		ActivitiesEntrance a1 = new ActivitiesEntrance();
		a1.setName("简历模板");
		a1.setValue("#");
		ActivitiesEntrance a2 = new ActivitiesEntrance();
		a2.setName("求职信");
		a2.setValue("#");
		ActivitiesEntrance a3 = new ActivitiesEntrance();
		a3.setName("求职攻略");
		a3.setValue("#");
		ActivitiesEntrance a4 = new ActivitiesEntrance();
		a4.setName("BBS");
		a4.setValue("#");
		ActivitiesEntrance a5 = new ActivitiesEntrance();
		a5.setName("培训");
		a5.setValue("#");
		ActivitiesEntrance a6 = new ActivitiesEntrance();
		a6.setName("中国典范雇主");
		a6.setValue("#");
		ActivitiesEntrance a7 = new ActivitiesEntrance();
		a7.setName("电竞游戏招聘");
		a7.setValue("#");
		ActivitiesEntrance a8 = new ActivitiesEntrance();
		a8.setName("2018名企招聘");
		a8.setValue("#");
		
		activitiesEntranceRepository.save(a1);
		activitiesEntranceRepository.save(a2);
		activitiesEntranceRepository.save(a3);
		activitiesEntranceRepository.save(a4);
		activitiesEntranceRepository.save(a5);
		activitiesEntranceRepository.save(a6);
		activitiesEntranceRepository.save(a7);
		activitiesEntranceRepository.save(a8);
		
		RecommendKeywords r1 = new RecommendKeywords();
		r1.setValue1("数据库工程师");
		r1.setValue2("数据库开发");
		r1.setValue3("数据库管理");
		r1.setValue4("Oracle 数据库");
		r1.setValue5("DBA 数据库");
		r1.setValue6("高级数据库");
		
		recommendKeywordsRepository.save(r1);
	}
}
