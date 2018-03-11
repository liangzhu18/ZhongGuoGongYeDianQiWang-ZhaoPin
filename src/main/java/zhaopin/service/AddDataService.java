package zhaopin.service;

import org.springframework.stereotype.Component;

import zhaopin.hibernate.ActivitiesEntranceRepository;
import zhaopin.hibernate.NavRepository;
import zhaopin.hibernate.RecommendKeywordsRepository;
import zhaopin.hibernate.entity.ActivitiesEntrance;
import zhaopin.hibernate.entity.Nav;
import zhaopin.hibernate.entity.RecommendKeywords;

@Component
public class AddDataService {
	
	public void run(NavRepository navRepository, 
			ActivitiesEntranceRepository activitiesEntranceRepository,
			RecommendKeywordsRepository recommendKeywordsRepository) {
		System.out.println("hello");
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
